import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transactions) => {
    if (transactions.type === 'deposit') {
      acc.deposits += transactions.amount;
      acc.total += transactions.amount;

    } else {
      acc.withdraws += transactions.amount;
      acc.total -= transactions.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcome} alt="Entradas"/>
        </header>
        <strong>-
        {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}