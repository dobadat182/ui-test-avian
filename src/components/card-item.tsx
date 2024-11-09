type Props = {
  icon?: React.ReactNode;
  label: string;
  amount: number;
};

const CardItem = ({ icon, label, amount }: Props) => {
  return (
    <div className="inline-flex items-center gap-7 rounded-xl bg-[#1a1c22] p-4">
      <div className="rounded-xl bg-[#282C35] p-3">{icon}</div>
      <div>
        <h4 className="mb-1 text-xs font-normal">{label}</h4>
        <p className="text-[27px] font-medium">
          ${amount.toLocaleString() || 0}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
