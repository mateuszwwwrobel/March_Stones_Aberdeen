from django.shortcuts import render
from .models import ContactMessage
from .forms import ContactMessageForm
from django.conf import settings

# Create your views here.



def home(request):
    return render(request, 'index.html')

def history(request):
    return render(request, 'history.html')

def map(request):

    context = {
        'api_key': settings.GOOGLE_MAP_API_KEY,
    }

    return render(request, 'map.html', context)

def contact(request):
    form = ContactMessageForm(request.POST or None)

    context = {
        'form': form,
    }

    return render(request, 'contact.html', context)

def message_sent(request):
    form = ContactMessageForm(request.POST or None)
    if form.is_valid:
        form.save()
        
    return render(request, 'message.html')
