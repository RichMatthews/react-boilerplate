// @flow
import * as React from 'react';

type Props = {
  number: number,
}

type State = {

}

class Other extends React.Component <Props, State> {

  constructor(props: Props) {
    super(props);
  }

  componentWillReceiveProps = (nextProps: Props) => {
    // console.log('here');
    if (this.props.number != nextProps.number){
      //console.log('props changed');
    }
    else {
      //console.log('props did not change');
    }
  }

  render() {
    const { number } = this.props;
    return (
      <div className="container">
        {number}
      </div>
    );
  }
}

export default Other;
