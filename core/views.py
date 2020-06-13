from django.shortcuts import render
from .models import ContactMessage
from .forms import ContactMessageForm


# Create your views here.



def home(request):
    return render(request, 'index.html')

def history(request):
    return render(request, 'history.html')

def map(request):
    return render(request, 'map.html')

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
