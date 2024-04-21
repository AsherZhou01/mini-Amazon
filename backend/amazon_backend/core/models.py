from django.db import models

# Create your models here.
class Order(models.Model):
    order_id = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=255)