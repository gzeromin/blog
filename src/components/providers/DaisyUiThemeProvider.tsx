"use client";

import useAuthStore from "@/libs/zustand/authStore";

export default function DaisyUiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useAuthStore();

  return <div data-theme={theme}>{children}</div>;
}
