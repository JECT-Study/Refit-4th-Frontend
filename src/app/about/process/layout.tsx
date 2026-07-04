import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "리핏 전시 과정",
  description:
    "리핏(ReFit)에서 작품과 공간을 탐색하고 전시 제안, 동의서 작성, 계약 완료까지 진행하는 과정을 소개합니다.",
  alternates: {
    canonical: "/about/process",
  },
};

export default function AboutProcessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
