import React, { Component } from "react";

interface Props {
  inputType: string;
  maxLength: number;
  value: string;
  onValueChange: (text: string) => void;
  onError: (text: string) => void;
}

class UniversalInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.validateNumberInput = this.validateNumberInput.bind(this);
    this.validateTextInput = this.validateTextInput.bind(this);
  }

  public validateNumberInput(text: string) {
    const reg = /^\d+$\b/;
    if (text.length === 0) {
      this.props.onValueChange(text);
    } else {
      if (reg.test(text)) {
        if (Number(text) <= this.props.maxLength) {
          this.props.onValueChange(text);
        } else {
          this.props.onError(
            "You can't enter a number higher than " + this.props.maxLength
          );
        }
      } else {
        this.props.onError("You can enter only numbers!");
      }
    }
  }

  public validateTextInput(text: string) {
    if (text.length === 0) {
      this.props.onValueChange(text);
    } else {
      if (text.length < this.props.maxLength) {
        this.props.onValueChange(text);
      } else {
        this.props.onError(
          "You can enter a max of " + this.props.maxLength + " characters."
        );
      }
    }
  }

  render() {
    if (this.props.inputType == "number") {
      return (
        <div className="form-group">
          <form>
            <input
              type="number"
              className="universalInput"
              name="NumberInput"
              onChange={event => this.validateNumberInput(event.target.value)}
              value={this.props.value ? String(this.props.value) : ""}
            />
          </form>
        </div>
      );
    }
    if (this.props.inputType == "text") {
      return (
        <div className="form-group">
          <form>
            <input
              type="text"
              className="universalInput"
              name="TextInput"
              value={this.props.value ? String(this.props.value) : ""}
              onChange={event => this.validateTextInput(event.target.value)}
            />
          </form>
        </div>
      );
    }
  }
}

export default UniversalInput;
