import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type CardProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
	return (
		<div
			className={cn('rounded-lg p-4 max-w-150 bg-stone-200', className)}
			{...props}
		>
			{children}
		</div>
	);
}
