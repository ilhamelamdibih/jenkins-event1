FROM python:3.11
WORKDIR /app
COPY . .
RUN pip install --upgrade pip && pip install -r requirements.txt
EXPOSE 80
CMD ["uvicorn", "main:app", "--reload"]