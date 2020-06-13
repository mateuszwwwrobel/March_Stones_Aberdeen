from django import forms
from .models import ContactMessage

class ContactMessageForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = [
            'first_name',
            'last_name',
            'email_address',
            'phone_number',
            'message_text',
        ]

        fields = {
            'first_name': "Enter your name:",
            'email_address': "Enter your e-mail address:",
            'phone_number': "Enter your phone number:",
            'message_text': "Write your message below:",
        }

        

