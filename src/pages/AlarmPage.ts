import { createComponent } from "../components/Component";
import { Page } from "./Page";
import Header from "../components/Header";
import InputTimeBox from "../components/InputTimeBox";
import EditableList from "../components/EditableList";
import { parserAlarm } from "../util";

export default class AlarmPage extends Page {
  private readonly LOCAL_STORAGE = "alarms";
  protected inputTimeBox: HTMLDivElement;
  protected alarmListEl: HTMLUListElement;

  constructor($app: HTMLDivElement) {
    super($app);
    this.inputTimeBox = document.createElement("div");
    this.alarmListEl = document.createElement("ul");
    this.inputTimeBox.classList.add("hidden", "flex-container", "alarm");
    this.alarmListEl.classList.add("list-wrapper");
    this.mainEl.appendChild(this.inputTimeBox);
    this.mainEl.appendChild(this.alarmListEl);

    this.state = {
      alarms: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)),
    };

    this.component = {
      header: createComponent(Header, {
        $target: this.headerEl,
        goBack: () => {},
        addNew: () => {
          this.inputTimeBox.classList.remove("hidden");
        },
      }),
      inputTimeBox: createComponent(InputTimeBox, {
        $target: this.inputTimeBox,
        onSubmit: (type: string, time: string, minute: string) => {
          this.setState(
            {
              alarms: [...this.state.alarms, parserAlarm(type, time, minute)],
            },
            () =>
              localStorage.setItem(
                this.LOCAL_STORAGE,
                JSON.stringify(this.state.alarms)
              )
          );
          this.inputTimeBox.classList.add("hidden");
        },
      }),
      alarmList: createComponent(EditableList, {
        $target: this.alarmListEl,
        initialState: this.state,
        onDelete: (id: string) => {
          this.setState(
            {
              alarms: this.state.alarms.filter(
                (item: string, idx: number) => idx !== Number(id)
              ),
            },
            () =>
              localStorage.setItem(
                this.LOCAL_STORAGE,
                JSON.stringify(this.state.alarms)
              )
          );
        },
      }),
    };
  }

  render(): void {
    this.component.alarmList.setState(this.state);
  }
}
