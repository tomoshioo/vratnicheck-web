import type { LucideProps } from 'lucide-react';

/**
 * Logo X (bývalý Twitter) – ve stejném stroke stylu jako Lucide ikony.
 */
export function XLogo({ className, size = 24, strokeWidth = 2, ...props }: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M7 17L17 7" />
      <path d="M17 17L7 7" />
    </svg>
  );
}
