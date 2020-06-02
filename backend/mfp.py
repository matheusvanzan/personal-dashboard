from datetime import datetime
import myfitnesspal

client = myfitnesspal.Client('vanzan2015')

today = datetime.now().date()
day = client.get_date(today.year, today.month, today.day)
print(day)
print(day.meals)