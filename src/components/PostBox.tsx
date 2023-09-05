interface Props {
  userName: string;
}

export function PostBox({ userName }: Props) {
  return (
    <div>
      <p>Evniado por:{userName}</p>
    </div>
  );
}
