import * as React from "react";
import { Grid, Input, Button } from "semantic-ui-react";

export interface ISpecialInputSectionProps {
  onClickUserNameSetButton: (input: string) => void;
}

interface IState {
  userName: string;
}

export default class SpecialInputSection extends React.Component<
  ISpecialInputSectionProps,
  IState
> {
  constructor(props: ISpecialInputSectionProps) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    this.setState({ userName: e.currentTarget.value });
  };

  public render() {
    const { onClickUserNameSetButton } = this.props;
    const { userName } = this.state;
    return (
      <Grid>
        <Grid.Row centered>
          <h1>Input Section</h1>
        </Grid.Row>
        <Grid.Row centered>
          <Input
            placeholder="Enter Name Here..."
            onChange={this.onInputFieldChange}
          />
        </Grid.Row>
        <Grid.Row centered>
          <Button
            content="Submit New Canidate Name"
            color="purple"
            onClick={() => onClickUserNameSetButton(userName)}
          />
        </Grid.Row>
      </Grid>
    );
  }
}
