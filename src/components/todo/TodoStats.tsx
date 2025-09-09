interface TodoStatsProps {
  total: number;
  completed: number;
}

export const TodoStats = ({ total, completed }: TodoStatsProps) => {
  const remaining = total - completed;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
      <div className="text-center">
        <div className="text-2xl font-bold">{total}</div>
        <div className="text-sm text-muted-foreground">Total</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">{completed}</div>
        <div className="text-sm text-muted-foreground">Completed</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold">{remaining}</div>
        <div className="text-sm text-muted-foreground">Remaining</div>
      </div>
    </div>
  );
};