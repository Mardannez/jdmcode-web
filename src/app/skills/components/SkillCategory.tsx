interface Skill {
  name: string;
  proficiency: number;
  yearsOfExperience: number;
  projects: string[];
  icon: string;
  description: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  categoryIcon: string;
}

export default function SkillCategory({ title, skills, categoryIcon }: SkillCategoryProps) {
  return (
    <div className="bg-card rounded-lg shadow-subtle p-6 border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-brand-purple">
          <span className="text-2xl">{categoryIcon}</span>
        </div>
        <h2 className="font-headline text-2xl font-bold text-text-primary">{title}</h2>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="group">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{skill.icon}</span>
                <h3 className="font-semibold text-text-primary">{skill.name}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">{skill.yearsOfExperience}+ años</span>
                <span className="text-sm font-semibold text-primary">{skill.proficiency}%</span>
              </div>
            </div>
            <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-2">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-brand-purple transition-all duration-500 group-hover:scale-x-105"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
            <p className="text-sm text-text-secondary mb-2">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.projects.map((project, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-md"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}