"use client";

import React from "react";
import { StepData } from "@/lib/flasher/types";

function RunningStepIndicator({ index }: { index: number }) {
  return (
    <div className="relative h-8 w-8 flex-shrink-0">
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
        {index + 1}
      </div>
      <svg className="absolute inset-0 w-8 h-8 animate-spin" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          className="text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          d="M12 2a10 10 0 0 1 10 10"
        />
      </svg>
    </div>
  );
}

function SuccessStepIndicator({ index }: { index: number }) {
  return (
    <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function FailedStepIndicator({ index }: { index: number }) {
  return (
    <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-full bg-red-100 text-red-600 border-2 border-red-300 font-medium text-sm">
      {index + 1}
    </div>
  );
}

function PendingStepIndicator({ index }: { index: number }) {
  return (
    <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 font-medium text-sm">
      {index + 1}
    </div>
  );
}

function StepIndicator({
  index,
  status,
}: {
  status: StepData["status"];
  index: number;
}) {
  if (status === "running") {
    return <RunningStepIndicator index={index} />;
  }

  if (status === "success") {
    return <SuccessStepIndicator index={index} />;
  }

  if (status === "failed") {
    return <FailedStepIndicator index={index} />;
  }

  return <PendingStepIndicator index={index} />;
}

export default function Steps({ steps }: { steps: StepData[] }) {
  return (
    <div className="space-y-4">
      {steps.map((s, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex flex-col items-center">
            <StepIndicator status={s.status} index={index} />
            {index < steps.length - 1 && (
              <div
                className={`w-0.5 flex-1 mt-2 ${
                  s.status === "success" ? "bg-green-300" : "bg-gray-200"
                }`}
              />
            )}
          </div>
          <div className="flex-1 pb-8">
            <div
              className={`font-medium ${
                s.status === "running"
                  ? "text-blue-600"
                  : s.status === "success"
                    ? "text-green-600"
                    : s.status === "failed"
                      ? "text-red-600"
                      : "text-gray-500"
              }`}
            >
              {s.name}
            </div>
            {s.progress && (
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 transition-all duration-300"
                      style={{
                        width: `${(s.progress.current / s.progress.total) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {Math.round((s.progress.current / s.progress.total) * 100)}%
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {s.progress.current.toLocaleString()} / {s.progress.total.toLocaleString()} bytes
                </div>
              </div>
            )}
            {s.status === "failed" && s.error && (
              <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="font-medium text-red-800">{s.error.name}</div>
                <div className="text-sm text-red-600">{s.error.message}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
