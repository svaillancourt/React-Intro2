import * as React from "react";
import { Button } from "semantic-ui-react";
import { Fragment } from "react";

export interface ISpecialButtonProps {
  callbackMethod: () => void;
  callbackMethodToGoBack: () => void;
  isButtonPressed: boolean;
}

export default class SpecialButton extends React.Component<ISpecialButtonProps> {
  public render() {
    const {
      callbackMethod,
      isButtonPressed,
      callbackMethodToGoBack,
    } = this.props;

    return (
      <Fragment>
        {!isButtonPressed ? (
          <Button
            content="Ward 12 - Candidates!"
            color="orange"
            onClick={callbackMethod}
          />
        ) : (
          <Button
            content="Minimize Profiles"
            color="blue"
            onClick={callbackMethodToGoBack}
          />
        )}
      </Fragment>
    );
  }
}
