from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

# Initialize the Flask app and the database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///stocks.db'  # Using SQLite for simplicity
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Stock model
class Stock(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    ticker = db.Column(db.String(10), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    buy_price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f"Stock('{self.name}', '{self.ticker}', {self.quantity}, {self.buy_price})"

# Create the database
with app.app_context():
    db.create_all()

# API to add a new stock
@app.route('/api/stocks/add', methods=['POST'])
def add_stock():
    data = request.get_json()
    new_stock = Stock(
        name=data['name'],
        ticker=data['ticker'],
        quantity=data['quantity'],
        buy_price=data['buyPrice']
    )
    db.session.add(new_stock)
    db.session.commit()
    return jsonify({'message': 'Stock added successfully'}), 201

# API to fetch all stocks
@app.route('/api/stocks/all', methods=['GET'])
def get_all_stocks():
    stocks = Stock.query.all()
    return jsonify([{
        'id': stock.id,
        'name': stock.name,
        'ticker': stock.ticker,
        'quantity': stock.quantity,
        'buyPrice': stock.buy_price
    } for stock in stocks])

# API to calculate portfolio value
@app.route('/api/stocks/portfolio-value', methods=['GET'])
def calculate_portfolio_value():
    stocks = Stock.query.all()
    total_value = sum(stock.quantity * stock.buy_price for stock in stocks)
    return jsonify({'portfolioValue': total_value})

if __name__ == '__main__':
    app.run(debug=True)
