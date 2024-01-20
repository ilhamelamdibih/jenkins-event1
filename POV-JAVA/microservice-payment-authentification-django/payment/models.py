from django.db import models
from users.models import User


class Payment(models.Model):
    user =models.IntegerField()
    commande_id = models.IntegerField()
    cardNumber = models.CharField(max_length=255)
    cvv = models.CharField(max_length=255)
    expirationDate = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    transactionDate = models.DateField()
