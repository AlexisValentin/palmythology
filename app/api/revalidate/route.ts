import { type NextRequest, NextResponse } from "next/server";
import {
	revalidateCardsCache,
	revalidateCMSCache,
	revalidatePantheonsCache,
	revalidateQ2NCache,
	revalidateSubjectsCache,
} from "../../../src/utils/cms/cache";

async function handleRevalidation(request: NextRequest) {
	try {
		const searchParams = request.nextUrl.searchParams;
		const secret = searchParams.get("secret");
		const type = searchParams.get("type");

		if (secret !== process.env.REVALIDATION_SECRET) {
			return NextResponse.json({ message: "Invalid token." }, { status: 403 });
		}

		let result: {
			success: boolean;
			message: string;
		};

		switch (type) {
			case "cards":
				result = await revalidateCardsCache();
				break;
			case "pantheons":
				result = await revalidatePantheonsCache();
				break;
			case "subjects":
				result = await revalidateSubjectsCache();
				break;
			case "q2n":
				result = await revalidateQ2NCache();
				break;
			default:
				result = await revalidateCMSCache();
				break;
		}

		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.error("Something went wrong during cache invalidation => ", error);
		return NextResponse.json(
			{ message: "Something went wrong during cache invalidation" },
			{ status: 500 },
		);
	}
}

// Direct browser access
export async function GET(request: NextRequest) {
	return handleRevalidation(request);
}

// Webhook access
export async function POST(request: NextRequest) {
	return handleRevalidation(request);
}
