"use client";

import { useEffect } from "react";

export default function ApplyNonceToStyle() {
  useEffect(() => {
    const match = document.cookie.match(/x-nonce=([^;]+)/);
    const nonce = match?.[1];

    if (nonce) {
      // 모든 <style> 태그에 nonce 삽입
      document.querySelectorAll("style").forEach((el) => {
        if (!el.hasAttribute("nonce")) {
          el.setAttribute("nonce", nonce);
        }
      });
    }
  }, []);

  return null; // 아무것도 렌더링하지 않음
}
