import json
import jwt
from django.test import TestCase, Client
from django.urls import reverse
from .models import User


class UserViewTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.register_url = reverse('register')  
        self.login_url = reverse('login')  
        self.user_url = reverse('user') 
        self.logout_url = reverse('logout')

        # Créez un utilisateur de test
        self.user_data = {
            'email': 'g@g.com',
            'password': 'g',
        }
        self.user = User.objects.create_user(**self.user_data)

    def test_register_view(self):
        response = self.client.post(self.register_url, data=self.user_data)
        self.assertEqual(response.status_code, 200)

    def test_login_view(self):
        response = self.client.post(self.login_url, data=self.user_data)
        self.assertEqual(response.status_code, 200)

    def test_user_view_authenticated(self):
        # Connectez-vous pour obtenir un jeton
        login_response = self.client.post(self.login_url, data=self.user_data)
        token = login_response.data.get('jwt')

        # Ajoutez le jeton aux en-têtes de la requête pour les vues authentifiées
        headers = {'HTTP_AUTHORIZATION': f'Bearer {token}'}
        response = self.client.get(self.user_url, **headers)
        self.assertEqual(response.status_code, 200)

    def test_user_view_unauthenticated(self):
        response = self.client.get(self.user_url)
        self.assertEqual(response.status_code, 403)

    def test_logout_view(self):
        # Connectez-vous pour obtenir un jeton
        login_response = self.client.post(self.login_url, data=self.user_data)
        token = login_response.data.get('jwt')

        # Ajoutez le jeton aux en-têtes de la requête pour les vues authentifiées
        headers = {'HTTP_AUTHORIZATION': f'Bearer {token}'}

        # Déconnectez-vous
        response = self.client.post(self.logout_url, **headers)
        self.assertEqual(response.status_code, 200)

