import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../../core/models/comment.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments!: Comment[];
  @Output() newComment = new EventEmitter<string>();


  commentCtrl!: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // console.log("ng on init before comments") OK
    this.commentCtrl = this.formBuilder.control('', [Validators.required, Validators.minLength(10)])
    // console.log("ng on init after comments") OK

  }

  onLeaveComment() {
    if (this.commentCtrl.invalid) {
        return;
    }
    this.newComment.emit(this.commentCtrl.value);
    this.commentCtrl.reset();
  }
}
