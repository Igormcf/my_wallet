import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h2>TrybeWallet</h2>
          <b>E-mail:</b>
          { ' ' }
          <p data-testid="email-field">{ email }</p>
          <b>Despesas totais:</b>
          { ' ' }
          <p data-testid="total-field">0</p>
          <b>Câmbio usado:</b>
          { ' ' }
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);