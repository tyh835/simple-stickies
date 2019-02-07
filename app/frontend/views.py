from django.shortcuts import render


def index(request):
    """Render React SPA"""
    return render(request, 'frontend/index.html')
