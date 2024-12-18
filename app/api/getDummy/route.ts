import { NextResponse } from "next/server";

export interface IDummyData {
  id: number;
  title: string;
  description: string;
}

const dummyData: IDummyData[] = [
  {
    id: 1,
    title: "TITLE-1 입니다",
    description: "DESCRIPTION-1 입니다",
  },
  {
    id: 2,
    title: "TITLE-2 입니다",
    description: "DESCRIPTION-2 입니다",
  },
  {
    id: 3,
    title: "TITLE-3 입니다",
    description: "DESCRIPTION-3 입니다",
  },
  {
    id: 4,
    title: "TITLE-4 입니다",
    description: "DESCRIPTION-4 입니다",
  },
];

export async function GET() {
  return NextResponse.json(dummyData);
}
