import React from 'react';
import autobind from 'autobind-decorator';
import { Box, Button } from '@material-ui/core';


interface Props {
  //
  onModify: (event: React.MouseEvent) => void;
  onCancel: (event: React.MouseEvent) => void;
}


@autobind
class ActionButtonView extends React.Component<Props> {
  //
  render() {
    //
    const { onModify, onCancel } = this.props;

    return (
      <Box pt={3} display="flex" justifyContent="center">
        <Button variant="text" onClick={onCancel}>취소</Button>
        <Button color="primary" onClick={onModify}>저장</Button>
      </Box>
    );
  }
}

export default ActionButtonView;
