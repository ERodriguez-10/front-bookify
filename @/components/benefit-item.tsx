interface IBenefit {
  title: string;
  description: string;
  icon: any;
}

export default function BenefitItem({ title, description, icon }: IBenefit) {
  return (
    <div>
      {icon}
      <p className="py-1 text-xl font-bold">{title}</p>
      <p>{description}</p>
    </div>
  );
}
