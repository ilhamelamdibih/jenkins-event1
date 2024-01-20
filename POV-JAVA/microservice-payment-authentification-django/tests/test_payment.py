from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from .models import Payment
from users.models import User
import jwt
from datetime import datetime, timedelta

class TestPaymentViews(TestCase):
    def setUp(self):
        self.client = Client()
        self.payment_list_url = reverse('payment-list') 
        self.payment_detail_url = reverse('payment-detail', args=[1])  
        self.payment_create_url = reverse('payment-create') 

        self.user_data = {
            'id': 1,
            'email': 'test@example.com',
            'password': 'testpassword',
        }
        self.user = User.objects.create_user(**self.user_data)

        self.payment_data = {
            'commande_id': '123',
            'cardNumber': '1234567890123456',
            'cvv': '123',
            'expirationDate': '12/23',
            'price': 100.0,
            'transactionDate': datetime.now(),
            'user': self.user,
        }
        self.payment = Payment.objects.create(**self.payment_data)

    def test_payment_list_view(self):
        token = self._get_token()
        headers = {'HTTP_AUTHORIZATION': f'Bearer {token}'}
        response = self.client.post(self.payment_list_url, **headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_payment_detail_view(self):
        response = self.client.get(self.payment_detail_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_payment_create_view(self):
        token = self._get_token()
        headers = {'HTTP_AUTHORIZATION': f'Bearer {token}'}
        response = self.client.post(self.payment_create_url, data=self.payment_data, **headers)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def _get_token(self):
        user_data = {'id': 1}
        token = jwt.encode({'exp': datetime.utcnow() + timedelta(days=1), **user_data}, 'secret', algorithm='HS256')
        return token

    def tearDown(self):
        self.client.logout()
