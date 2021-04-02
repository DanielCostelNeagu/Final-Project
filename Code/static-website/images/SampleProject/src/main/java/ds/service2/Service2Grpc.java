package ds.service2;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 * <pre>
 * Interface exported by the server.
 * </pre>
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.15.0)",
    comments = "Source: service2.proto")
public final class Service2Grpc {

  private Service2Grpc() {}

  public static final String SERVICE_NAME = "service2.Service2";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<ds.service2.RequestMessage,
      ds.service2.ResponseMessage> getService2DoMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "service2_do",
      requestType = ds.service2.RequestMessage.class,
      responseType = ds.service2.ResponseMessage.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<ds.service2.RequestMessage,
      ds.service2.ResponseMessage> getService2DoMethod() {
    io.grpc.MethodDescriptor<ds.service2.RequestMessage, ds.service2.ResponseMessage> getService2DoMethod;
    if ((getService2DoMethod = Service2Grpc.getService2DoMethod) == null) {
      synchronized (Service2Grpc.class) {
        if ((getService2DoMethod = Service2Grpc.getService2DoMethod) == null) {
          Service2Grpc.getService2DoMethod = getService2DoMethod = 
              io.grpc.MethodDescriptor.<ds.service2.RequestMessage, ds.service2.ResponseMessage>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "service2.Service2", "service2_do"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ds.service2.RequestMessage.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  ds.service2.ResponseMessage.getDefaultInstance()))
                  .setSchemaDescriptor(new Service2MethodDescriptorSupplier("service2_do"))
                  .build();
          }
        }
     }
     return getService2DoMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static Service2Stub newStub(io.grpc.Channel channel) {
    return new Service2Stub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static Service2BlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new Service2BlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static Service2FutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new Service2FutureStub(channel);
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static abstract class Service2ImplBase implements io.grpc.BindableService {

    /**
     */
    public void service2Do(ds.service2.RequestMessage request,
        io.grpc.stub.StreamObserver<ds.service2.ResponseMessage> responseObserver) {
      asyncUnimplementedUnaryCall(getService2DoMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getService2DoMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                ds.service2.RequestMessage,
                ds.service2.ResponseMessage>(
                  this, METHODID_SERVICE2_DO)))
          .build();
    }
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class Service2Stub extends io.grpc.stub.AbstractStub<Service2Stub> {
    private Service2Stub(io.grpc.Channel channel) {
      super(channel);
    }

    private Service2Stub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected Service2Stub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new Service2Stub(channel, callOptions);
    }

    /**
     */
    public void service2Do(ds.service2.RequestMessage request,
        io.grpc.stub.StreamObserver<ds.service2.ResponseMessage> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getService2DoMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class Service2BlockingStub extends io.grpc.stub.AbstractStub<Service2BlockingStub> {
    private Service2BlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private Service2BlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected Service2BlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new Service2BlockingStub(channel, callOptions);
    }

    /**
     */
    public ds.service2.ResponseMessage service2Do(ds.service2.RequestMessage request) {
      return blockingUnaryCall(
          getChannel(), getService2DoMethod(), getCallOptions(), request);
    }
  }

  /**
   * <pre>
   * Interface exported by the server.
   * </pre>
   */
  public static final class Service2FutureStub extends io.grpc.stub.AbstractStub<Service2FutureStub> {
    private Service2FutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private Service2FutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected Service2FutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new Service2FutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<ds.service2.ResponseMessage> service2Do(
        ds.service2.RequestMessage request) {
      return futureUnaryCall(
          getChannel().newCall(getService2DoMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SERVICE2_DO = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final Service2ImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(Service2ImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SERVICE2_DO:
          serviceImpl.service2Do((ds.service2.RequestMessage) request,
              (io.grpc.stub.StreamObserver<ds.service2.ResponseMessage>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class Service2BaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    Service2BaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return ds.service2.Service2Impl.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Service2");
    }
  }

  private static final class Service2FileDescriptorSupplier
      extends Service2BaseDescriptorSupplier {
    Service2FileDescriptorSupplier() {}
  }

  private static final class Service2MethodDescriptorSupplier
      extends Service2BaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    Service2MethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (Service2Grpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new Service2FileDescriptorSupplier())
              .addMethod(getService2DoMethod())
              .build();
        }
      }
    }
    return result;
  }
}
