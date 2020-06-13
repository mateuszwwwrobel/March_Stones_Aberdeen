from django.db import models

# Create your models here.


class ContactMessage(models.Model):
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    email_address = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    message_text = models.TextField()

    def __str__(self):
        return self.email_address