'use client';

import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AiFillMail } from 'react-icons/ai';

const AIRTABLE_URL =
  "https://airtable.com/embed/appGZCdm9bgeeAuH2/pagZAfSnwtzoHxkuo/form";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="flex flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-black sm:text-7xl">
          Viking Hacks 2026 Registration
        </h1>

        <h2 className="flex flex-col sm:flex-row justify-center gap-[0.2rem] pb-6 mx-auto mt-2 max-w-xl text-lg text-neutral-700 leading-7">
          Contact us at{" "}
          <a
            href="mailto:hello@vikinghacks.com"
            className="flex justify-center items-center text-blue-600 gap-1 underline decoration-dotted underline-offset-4 transition-all"
          >
            <AiFillMail />
            hello@vikinghacks.com
          </a>{" "}
          with any questions or concerns
        </h2>

        <div className="mb-6">
          <a
            href={AIRTABLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Open form in a new tab
          </a>
        </div>
      </main>

      <div className="relative w-full">
        {isLoading && (
          <div className="w-full flex flex-col gap-2 justify-center items-center py-6">
            <h1 className="text-lg text-black font-mono">Loading form…</h1>
            <div className="w-40 h-2 bg-blue-500 rounded-full animate-pulse" />
          </div>
        )}

        <iframe
          className="airtable-embed bg-transparent w-full"
          src={AIRTABLE_URL}
          style={{ height: 2200 }}  // set a safe fixed height
          frameBorder="0"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <Footer />
    </div>
  );
}
