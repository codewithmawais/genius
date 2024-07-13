import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from 'openai';

import { checkApiLimit, incrementApiLimit } from "@/lib/api-limits";

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt, amount = 1, resolution = "512x512" } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }

        if (!amount) {
            return new NextResponse("Amount is required", { status: 400 });
        }

        if (!resolution) {
            return new NextResponse("Resolution is required", { status: 400 });
        }

        const freeTrial = await checkApiLimit();

        if (!freeTrial) {
            return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        }

        const response = await openai.images.generate({
            prompt,
            n: parseInt(amount, 10),
            size: resolution,
        });

        await incrementApiLimit();

        return NextResponse.json(response.data);

    } catch (error) {
        console.log('[IMAGE_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};
