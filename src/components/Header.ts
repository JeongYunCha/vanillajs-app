interface IProps {
  $target: HTMLElement;
  goBack?: Function;
  addNew?: Function;
}

export default function Header({ $target, goBack, addNew }: IProps) {
  $target.addEventListener("click", (e: MouseEvent) => {
    if (e.target["innerHTML"] === "NEW") {
      e.stopPropagation();
      addNew(e);
    }
  });

  $target.innerHTML = `
    <ul class='flex-container'>
      ${goBack ? `<li class='flex-item btn'><a href='/'>BACK</a></li>` : ""}
      <li class='flex-item grow'>시계</li>
      ${
        addNew ? `<li class='flex-item btn' onclick='${addNew()}'>NEW</li>` : ""
      }
    </ul>
  `;
}
