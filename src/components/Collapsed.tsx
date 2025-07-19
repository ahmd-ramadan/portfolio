import { ChevronDown, ChevronRight } from "lucide-react"

type CollapsedProps = {
  title: string;
  isCollapsed: boolean;
  onToggle: () => void;
};

const Collapsed = ({ title, isCollapsed, onToggle }: CollapsedProps) => (
    <div className="flex items-center gap-1">
        <button onClick={onToggle}>
        {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
        ) : (
            <ChevronDown className="w-4 h-4" />
        )}
        </button>
        <h2 className="text-xl font-bold">{title}</h2>
    </div>
);

export default Collapsed;