  state = {

  }

  fetchPizzas() {
    return fetch(API)
    .then(res => res.json())
    .then(pizzas =>
    this.setState({
      pizzas: pizzas
    }))
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  newObj = {}
  objArr = [{}, {}]
  this.state.pizzas.map(pizza => {
    if pizza.id == updatedPizza.id
      return updatedPizza
    else
        return pizza
  })

  saveChange = (event) => {
    console.log(event.target.name, event.target.value)
    if(event.target.name === "Vegetarian") {
      this.setState({
        vegetarian: true
      })
    } else if(event.target.name === "Not-Vegetarian"){
      this.setState({
        vegetarian: false
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }


    buyStock = (stock) => {
      return this.setState(prevState => {
        return {boughtStocks: [...prevState.boughtStocks, stock]}
      })
    }

    sellStock = (stock) => {
      let array = [...this.state.boughtStocks]
      let index = array.indexOf(stock)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({boughtStocks: array});
      }
    }


      sortStocks = (input) => {
        if (input === "Alphabetically") {
          const sortedStocks = this.state.stocks.sort((a,b) => {
            return a.name.localeCompare(b.name)
          })
          this.setState({
            sortedStocks: sortedStocks
          })
        } else {
          const sortedStocks = this.state.stocks.sort((a,b) => {
            return a.price > b.price ? 1 : -1
          }).reverse()
          this.setState({
            sortedStocks: sortedStocks
          })
        }
      }

      changeFilterV = (input) => {
        this.setState({
          filterV: input
        })
      }

      filterStocks = () => {
        if (this.state.filterV === "Tech") {
          return this.state.stocks.filter(stock => stock.type === "Tech")
        } else if (this.state.filterV === "Sportswear") {
          return this.state.stocks.filter(stock => stock.type === "Sportswear")
        } else if (this.state.filterV === "Finance") {
          return this.state.stocks.filter(stock => stock.type === "Finance")
        } else {
          return this.state.stocks
        }
      }

      render() {
        return (
          <div>
            <h2>Stocks</h2>
            {this.props.stocks.map(stock =>
            {return <Stock stock={stock} key={stock.id} buyStock={ this.props.buyStock} buy={"buy"}/>
          })
            }
          </div>
        );
      }


      const Stock = (props) => (
        <div>
          <div className="card" onClick={() => props.buy ? props.buyStock(props.stock) : props.sellStock(props.stock)}>
            <div className="card-body">
              <h5 className="card-title">{
                  props.stock.name
                }</h5>
              <p className="card-text">{
                  props.stock.ticker + ": $" + props.stock.price
                }</p>
            </div>
          </div>


        </div>
      );

const {saveUserName, logged, loginUser, userName} = this.props
