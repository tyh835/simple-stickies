from rest_framework import viewsets
from backend.models import Note
from backend.serializers import NoteSerializer

# Note Viewset
class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
