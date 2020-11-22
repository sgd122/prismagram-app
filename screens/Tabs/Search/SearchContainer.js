import * as React from "react";
import SearchBar from "../../../components/SearchBar";
import SearchPresenter from "./SearchPresenter";


export default class extends React.Component {
  static navigationOptions = ({ navigation, route }) => {
    return {
      headerTitle: (
        <SearchBar
          value={route.params?.term ?? ''}
          onChange={route.params?.onChange ?? (() => null)}
          onSubmit={route.params?.onSubmit ?? (() => null)}
        />
      ),
      /* These values are used instead of the shared configuration! */
    };
  };

  constructor(props) {
    super(props);
    const { navigation, route } = props;

    this.state = {
      term: "",
      shouldFetch: false
    };

    navigation.setParams({
      term: this.state.term,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    });
  };

  onChange = (text) => {
    const { navigation } = this.props;
    this.setState({ term: text, shouldFetch: false });
    navigation.setParams({
      term: text
    });
  };

  onSubmit = () => {
    this.setState({ shouldFetch: true });
  };

  render() {
    const { term, shouldFetch } = this.state;
    return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
  }
}