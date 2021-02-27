
import React from 'react';
import autobind from 'autobind-decorator';
import BasicDialogView from './view/BasicDialogView';


interface Props {
  //
  children: React.ReactNode;
  buttonLabel: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface State {
  //
  open: boolean;
}


@autobind
class BasicDialogContainer extends React.Component<Props, State> {
  //
  static defaultProps = {
    onConfirm: () => {},
    onCancel: () => {},
  };

  state: State = {
    open: false,
  };

  onOpen() {
    //
    this.setState({ open: true });
  }

  onClose() {
    //
    this.setState({ open: false });
  }

  onConfirm() {
    //
    const { onConfirm } = this.props;

      onConfirm!();
      this.onClose();
  }

  onCancel() {
    //
    const { onCancel } = this.props;

      onCancel!();
      this.onClose();
  }

  render() {
    //
    const { buttonLabel, children } = this.props;
    const { open } = this.state;

    return (
      <BasicDialogView
        buttonLabel={buttonLabel}
        open={open}
        onOpen={this.onOpen}
        onClose={this.onClose}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
      >
        {children}
      </BasicDialogView>
    );
  }
}

export default BasicDialogContainer;
