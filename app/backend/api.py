from rest_framework import viewsets
from backend.serializers import NoteSerializer


class NoteViewSet(viewsets.ModelViewSet):
    """ViewSet REST API for notes"""
    serializer_class = NoteSerializer

    def get_queryset(self):
        return self.request.user.notes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
