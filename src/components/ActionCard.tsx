
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ActionCardProps {
  title: string;
  description: ReactNode;
  id: string;
  color: string;
  icon?: string;
  lock?: boolean;
}

const ActionCard = ({ 
  title, 
  description, 
  id, 
  color, 
  icon = "🃏", 
  lock = false 
}: ActionCardProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className={cn(
          "action-card w-full md:w-1/3 lg:w-1/4 aspect-[3/4] flex flex-col",
          `bg-${color}/10`
        )}>
          <div className={cn(
            "w-full h-full flex flex-col items-center justify-center p-6",
            `border-4 border-${color} rounded-xl`
          )}>
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className={cn(
              "text-xl font-bold uppercase tracking-wider text-center",
              `text-${color}`
            )}>
              {title}
            </h3>
            {lock && <div className="mt-2 text-2xl">🔒</div>}
          </div>
        </div>
        
        <div className="w-full md:w-2/3 lg:w-3/4">
          <h3 className={cn(
            "text-2xl font-bold mb-4",
            `text-${color}`
          )}>
            {title} {lock && '🔒'}
          </h3>
          <div className="prose max-w-none">
            {description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCard;
