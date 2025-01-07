# -Simple-Portfolio-Tracker-
# Portfolio Tracker

A simple Flask-based application to manage and track a stock portfolio.

---

## Features
- Add, view, edit, and delete stock holdings.
- Track the total portfolio value based on real-time stock prices.
- View key metrics such as total portfolio value and stock performance on a dashboard.

---

## Prerequisites
Before starting, ensure the following are installed:
- **Python**: Version 3.7 or later
- **pip**: Python package manager
- A modern web browser
- Optional tools: Postman or cURL for API testing

---

## Steps to Run the Project Locally

### 1. Clone the Repository
Download the code to your local machine:
```bash```
git clone [https://github.com/your-username/portfolio-tracker.git]
cd portfolio-tracker
---------------------------------------------------------------------------
2. Set Up a Virtual Environment (Optional)
Creating a virtual environment helps manage dependencies for the project:

Create a virtual environment:
bash
Copy code
python -m venv venv
Activate the virtual environment:
On Windows:
bash
Copy code
venv\Scripts\activate
On Linux/Mac:
bash
Copy code
source venv/bin/activate
---------------------------------------------------------------------------
3. Install Dependencies
Install the required libraries:

bash
Copy code
pip install flask requests
---------------------------------------------------------------------------
4. Configure the Application
Update the app.py file with your stock price API details:

Replace API_URL with the endpoint of a real stock price API.
Replace API_KEY with your API key for that service.
Example:

python
Copy code
API_URL = "https://api.example.com/stock-price"
API_KEY = "your_actual_api_key"
---------------------------------------------------------------------------
5. Initialize the Database
The SQLite database (portfolio.db) will be created automatically when you run the application for the first time. No manual setup is required.
---------------------------------------------------------------------------

7. Run the Application
Start the Flask server:

bash
Copy code
python app.py
You should see output similar to:

csharp
Copy code
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
* ---------------------------------------------------------------------------
7. Access the Application
Open your browser and go to:
arduino
Copy code
http://127.0.0.1:5000/
---------------------------------------------------------------------------
Assumptions and Limitations
Assumptions
Stock prices are fetched from an external API. Ensure the API_URL and API_KEY are correctly set.
The project runs locally for testing and development.
Users interact with the application through a browser.
Limitations
The current implementation lacks user authentication.
No real-time updates without refreshing the page.
API response parsing is basic and may need adjustments for different APIs.
Error handling for invalid input or API failures can be improved.
