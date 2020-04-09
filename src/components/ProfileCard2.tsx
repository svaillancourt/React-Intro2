import * as React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import image1 from "../img/step.jpg"; // your picture

export interface IProfileCard2Props {
  userName: string;
}

export default class ProfileCard2 extends React.Component<IProfileCard2Props> {
  public render() {
    const { userName } = this.props;
    return (
      <React.Fragment>
        <Card>
          <Image src={image1} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{userName}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in the party in 2020</span>
            </Card.Meta>
            <Card.Description>
              {userName} is an outstanding citizen living in the South-West of
              Edmonton.
            </Card.Description>
            <Card.Description>
              {userName} was laid off recently, not having much luck with the
              job searching. {userName} signed up for a Full-Stack developer
              certificate program at the University of Alberta provided by
              TechCareer! With whatever limited spare time {userName} has, you
              can find {userName} actively volunteering within the community. If
              you ever need to contact {userName}. Please don't hesitate to
              reach out!
            </Card.Description>
            <Card.Description>
              We're proud to have {userName} on our side! Thank you again for
              your support!
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            2000+ Friends
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}
