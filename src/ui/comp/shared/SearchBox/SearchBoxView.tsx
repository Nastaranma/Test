import React from 'react';
import autobind from 'autobind-decorator';
import { TextField } from '@material-ui/core';


interface Props {
  //
  keyword: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


@autobind
class SearchBoxView extends React.Component<Props> {
  //
  render() {
    //
    const { keyword, onChange } = this.props;

    return (
      <TextField
        fullWidth
        margin="dense"
        variant="outlined"
        placeholder="Search"
        value={keyword}
        onChange={onChange}
      />
    );
  }
}

export default SearchBoxView;
