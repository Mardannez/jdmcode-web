import Icon from '@/components/ui/AppIcon';

interface GitHubContribution {
  repository: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  lastUpdate: string;
}

interface GitHubActivityProps {
  contributions: GitHubContribution[];
}

export default function GitHubActivity({ contributions }: GitHubActivityProps) {
  return (
    <div className="bg-card rounded-lg shadow-subtle border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="CodeBracketIcon" size={24} className="text-primary" />
        <h2 className="font-headline text-2xl font-bold text-text-primary">
          Contribuciones GitHub
        </h2>
      </div>
      <div className="space-y-4">
        {contributions.map((contribution, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-muted rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-brand-purple flex items-center justify-center">
                <Icon name="FolderIcon" size={20} className="text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-text-primary mb-1">{contribution.repository}</h3>
              <p className="text-sm text-text-secondary mb-2">{contribution.description}</p>
              <div className="flex items-center space-x-4 text-xs text-text-secondary">
                <span className="flex items-center space-x-1">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{contribution.language}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="StarIcon" size={12} />
                  <span>{contribution.stars}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Icon name="CodeBracketSquareIcon" size={12} />
                  <span>{contribution.forks}</span>
                </span>
                <span>Actualizado: {contribution.lastUpdate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}