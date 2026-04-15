import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function Button({
	children,
	className,
	type = 'button',
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={cn(
				'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition max-w-50 cursor-pointer bg-stone-300',
				'disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
