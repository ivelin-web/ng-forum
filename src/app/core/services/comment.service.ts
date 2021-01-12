import { Injectable } from '@angular/core';
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IComment } from 'src/app/components/shared/models/comment';

@Injectable()
export class CommentService {
    constructor(private afs: AngularFirestore) {}

    getCommentsByPostId(postId: string) {
        return this.afs
            .collection<IComment>('comments', (ref) =>
                ref.where('postId', '==', postId)
            )
            .snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((item) => {
                        return {
                            ...item.payload.doc.data(),
                            id: item.payload.doc.id,
                        };
                    });
                })
            );
    }

    createComment(data: IComment) {
        return this.afs.collection<IComment>('comments').add(data);
    }

    editComment(id: string, data: IComment) {
        return this.afs.collection<IComment>('comments').doc(id).update(data);
    }

    deleteComment(id: string) {
        return this.afs.collection<IComment>('comments').doc(id).delete();
    }

    getNumberOfCommentsByPostId(postId: string) {
        return this.getCommentsByPostId(postId);
    }
}
