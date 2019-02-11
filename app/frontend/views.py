from django.shortcuts import render, redirect


def index(request):
    """Render React SPA"""
    return render(request, 'frontend/index.html')

def redirect_to_spa(request):
    """Redirects to home page SPA"""
    return redirect('/')
