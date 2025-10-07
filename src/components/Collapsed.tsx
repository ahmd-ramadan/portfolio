import { ChevronRight } from "lucide-react"

type CollapsedProps = {
  title: string;
  isCollapsed: boolean;
  onToggle: () => void;
};

const Collapsed = ({ title, isCollapsed, onToggle }: CollapsedProps) => {
    return (
        <button
            type="button"
            onClick={onToggle}
            aria-expanded={!isCollapsed}
            className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:hover:bg-gray-800"
        >
            <ChevronRight
                className={`w-4 h-4 transition-transform duration-300 ease-out ${isCollapsed ? "rotate-0" : "rotate-90"}`}
            />
            <span className="text-xl font-bold select-none">{title}</span>
        </button>
    )
};

export default Collapsed;